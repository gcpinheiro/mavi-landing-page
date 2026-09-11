import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PortfolioSection } from './portfolio-section';

describe('Portfolio video playback', () => {
  it('loads and decodes the real local video, advancing playback time', async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSection],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    const fixture = TestBed.createComponent(PortfolioSection);
    fixture.detectChanges();
    const video: HTMLVideoElement = fixture.nativeElement.querySelector('video');
    // Muting permits programmatic playback without a user gesture in this test.
    video.muted = true;
    try {
      await video.play();
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => finish(new Error('Video playback did not advance')), 8000);
        const onTimeUpdate = () => { if (video.currentTime > 0.1) finish(); };
        const onError = () => finish(new Error(video.error?.message || 'Video decoding failed'));
        const finish = (error?: Error) => {
          clearTimeout(timeout);
          video.removeEventListener('timeupdate', onTimeUpdate);
          video.removeEventListener('error', onError);
          error ? reject(error) : resolve();
        };
        video.addEventListener('timeupdate', onTimeUpdate);
        video.addEventListener('error', onError);
        onTimeUpdate();
      });
      expect(video.videoWidth).toBeGreaterThan(0);
      expect(video.currentTime).toBeGreaterThan(0.1);
      expect(video.error).toBeNull();
    } finally {
      video.pause();
      fixture.destroy();
    }
  }, 20000);
});
