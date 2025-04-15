import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const useEmptyStateAnimations = () => {
  // Animation refs
  const heartScale = useRef(new Animated.Value(0.8)).current;
  const steam1Opacity = useRef(new Animated.Value(0)).current;
  const steam2Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Heart beat animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(heartScale, {
          toValue: 1.1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(heartScale, {
          toValue: 0.8,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Steam animations
    const animateSteam = (steamOpacity) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(steamOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(steamOpacity, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateSteam(steam1Opacity);

    // Offset second steam animation
    setTimeout(() => {
      animateSteam(steam2Opacity);
    }, 400);
  }, []);

  // Return animation styles
  return {
    heartAnimation: {
      transform: [{ scale: heartScale }],
    },
    steamAnimation1: {
      opacity: steam1Opacity,
      transform: [
        {
          translateY: steam1Opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -15],
          }),
        },
      ],
    },
    steamAnimation2: {
      opacity: steam2Opacity,
      transform: [
        {
          translateY: steam2Opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -15],
          }),
        },
      ],
    },
  };
};
