import { TweetsModule } from './tweets.module';

describe('TweetsModule', () => {
  let tweetsModule: TweetsModule;

  beforeEach(() => {
    tweetsModule = new TweetsModule();
  });

  it('should create an instance', () => {
    expect(tweetsModule).toBeTruthy();
  });
});
