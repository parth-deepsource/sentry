import {Button} from 'sentry/components/button';
import {useReplayContext} from 'sentry/components/replays/replayContext';
import {IconPause, IconPlay, IconPrevious} from 'sentry/icons';
import {t} from 'sentry/locale';

function ReplayPlayPauseButton() {
  const {isFinished, isPlaying, restart, togglePlayPause} = useReplayContext();

  return isFinished ? (
    <Button
      title={t('Restart Replay')}
      icon={<IconPrevious size="md" />}
      onClick={restart}
      aria-label={t('Restart Replay')}
      priority="primary"
    />
  ) : (
    <Button
      title={isPlaying ? t('Pause') : t('Play')}
      icon={isPlaying ? <IconPause size="md" /> : <IconPlay size="md" />}
      onClick={() => togglePlayPause(!isPlaying)}
      aria-label={isPlaying ? t('Pause') : t('Play')}
      priority="primary"
    />
  );
}

export default ReplayPlayPauseButton;