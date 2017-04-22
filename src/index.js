export function add(first, second){
  return first + second;
}

export function sub(first, second){
  return first - second;
}

export function addf(first) {
  return function (second) {
    return first + second;
  };
}

export function curry(binary, first) {
    return function (second) {
        return binary(first, second);
    };
}
