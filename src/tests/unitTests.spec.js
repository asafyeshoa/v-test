const services = {
  calculateSum: (a, b) => a + b,
  returnBiggerNumber: (a, b) => (a > b ? a : b),
};

let testCount = 0;

beforeAll(() => {
  console.log("Starting test suite");
});

afterAll(() => {
  console.log(`Test suite completed. Total tests run: ${testCount}`);
});

describe("Services Tests", () => {
  const testCases = [
    {
      functionName: "calculateSum",
      testEachData: [
        { params: [2, 3], calculateExpected: (a, b) => a + b },
        { params: [5, 7], calculateExpected: (a, b) => a + b },
      ],
      act: (a, b) => services.calculateSum(a, b),
    },
    {
      functionName: "returnBiggerNumber",
      testEachData: [
        { params: [4, 7], calculateExpected: (a, b) => (a > b ? a : b) },
        { params: [10, 3], calculateExpected: (a, b) => (a > b ? a : b) },
      ],
      act: (a, b) => services.returnBiggerNumber(a, b),
    },
  ];

  testCases.forEach((testCaseGroup) => {
    const { functionName, act, testEachData } = testCaseGroup;

    describe(`${functionName} Test`, () => {
      testCount += testEachData.length;

      // Using test.each for all test cases
      test.each(testEachData.map(({ params, calculateExpected }) => [params, calculateExpected(...params)]))(
        `${functionName} with input %p should return %p`,
        (input, expected) => {
          // Act: Call the function with specific parameters
          const result = act(...input);

          // Assert: Check if the result is as expected
          expect(result).toBe(expected);
        }
      );
    });
  });
});
