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

export let sumSpread = function ( ...values ) {
  let total = 0;

  values.forEach(function(n){
  total += n;
  });

  return total;
};
