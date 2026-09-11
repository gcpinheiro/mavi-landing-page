import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = process.argv[2] || 'http://127.0.0.1:4200';
const assets = [
  { path: 'videos/event-demo.mp4', type: 'video/mp4' },
  { path: 'images/event-demo-poster.jpg', type: 'image/jpeg' },
];

for (const asset of assets) {
  const response = await fetch(new URL(asset.path, origin), {
    headers: { Range: 'bytes=0-63' },
    signal: AbortSignal.timeout(15000),
  });
  try {
    assert.equal(response.status, 206, `${asset.path}: expected partial content, got ${response.status}. Restart the development server if new assets were added.`);
    assert.ok(response.headers.get('content-type')?.startsWith(asset.type), `${asset.path}: wrong MIME type (an HTML fallback is not a media response)`);
    assert.match(response.headers.get('content-range') || '', /^bytes 0-63\/\d+$/);
    const served = Buffer.from(await response.arrayBuffer());
    const local = await readFile(new URL(`../public/${asset.path}`, import.meta.url));
    assert.deepEqual(served, local.subarray(0, 64), `${asset.path}: served bytes differ from the local asset`);
    console.log(`OK: ${asset.path} — correct MIME type, byte ranges and file content`);
  } finally {
    if (!response.bodyUsed) await response.body?.cancel();
  }
}
