function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function serch(arg) {
  console.log(arg, "Search executed");
}
const debouncedSearch = debounce(serch, 1000);
debouncedSearch("Hello");
debouncedSearch("Hello World");
debouncedSearch("Hello World!!!");



