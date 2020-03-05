/* eslint-disable @typescript-eslint/no-magic-numbers */

import * as fc from 'fast-check';

import { fibonacci } from '.';

describe('fibonacci', (): void => {
  it('returns a correct result for the beginning of the sequence', (): void => {
    expect.assertions(2);

    expect(fibonacci(0)).toStrictEqual(0n);
    expect(fibonacci(1)).toStrictEqual(1n);
  });

  it('result for n is equal to a sum of results for n-1 and n-2', (): void => {
    expect.hasAssertions();

    fc.assert(
      fc.property(fc.integer(2, 100), (index: number): void =>
        expect(fibonacci(index)).toStrictEqual(
          fibonacci(index - 1) + fibonacci(index - 2),
        ),
      ),
    );
  });
});
