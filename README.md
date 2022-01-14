# React Fiber vs Stack

This demo shows the differences between Stack and Fiber architecture.

The numbers change every second, and during this change, the animation lags.
Lags occur because two parallel actions are performed: **animation processing** and **DOM updates**.
During DOM recalculation, the animation does not play because all resources are allocated to work with the DOM.

**React Fiber** is an ongoing reimplementation of React's core algorithm. 
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. 
Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

<div>
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/approxipix/react-stack-vs-fiber?color=2b9348">
  <img src="https://img.shields.io/depfu/approxipix/react-stack-vs-fiber" alt="Dependencies status" />
  <a href="https://github.com/approxipix/react-stack-vs-fiber/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/elangosundar/awesome-README-templates?color=2b9348" alt="License Badge"/>
  </a>
</div>

## Demo
