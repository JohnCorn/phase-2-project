import { useCallback, useEffect, useRef } from 'react';

import ReactCanvasConfetti from 'react-canvas-confetti';

function Confetti() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 1 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  useEffect(() => fire(), []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 42,
      gravity: 0.66
    });

    makeShot(0.2, {
      spread: 60,
      startVelocity: 38,
      gravity: 0.5
    });

    makeShot(0.35, {
      spread: 45,
      decay: 0.91,
      scalar: 0.8,
      startVelocity: 25,
      gravity: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      decay: 0.92,
      scalar: 1.2,
      startVelocity: 35,
      gravity: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 42,
      gravity: 0.66
    });
  }, [makeShot]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }}
    />
  );
}

export default Confetti;