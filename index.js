module.exports = (container, subject, offset = 0) => {
  const left = subject.x < container.x
  const right = subject.x + subject.width > container.x + container.width
  const top = subject.y < container.y
  const bottom = subject.y + subject.height > container.y + container.height

  return {
    x: !left
      ? container.x - offset
      : !right
        ? container.x + container.width - subject.width + offset
        : subject.x,
    y: !top
      ? container.y - offset
      : !bottom
        ? container.y + container.height - subject.height + offset
        : subject.y
  }
}
