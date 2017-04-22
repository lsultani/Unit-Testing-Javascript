import test from 'tape';
import { add, sub, addf, curry } from './index';

test( 'add fn', function ( test ) {
  const actual = add( 1, 2 );
  let expected = 3;

  test.equal( actual, expected, 'should add the sum of first and second number passed' );

  test.end();
});

test( 'sub fn', function ( test ) {
  const actual = sub( 3, 2 );
  let expected = 1;

  test.equal( actual, expected, 'should subtract the first and second number passed' );

  test.end();
});

test( 'addf fn', function ( test ) {
  const actual = addf( 5 )( 5 );
  let expected = 10;

  test.equal( actual, expected, 'should add the sum of first and second from two invocations' );

  test.end();
});

test( 'curry fn', function ( test ) {
  const actual = curry( add, 5 )(6);
  let expected = 11;

  test.equal( actual, expected, 'should take a binary function in this case (add) and an argument (5) and return a function that takes a second argument (6) and (add) the two arguments' );

  test.end();
});
