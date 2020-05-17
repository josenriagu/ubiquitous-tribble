// utility function to revert webp to default supported format if it fails on any browser
const revertSrc = (e, src) => (e.target.src = src);

export default revertSrc;
