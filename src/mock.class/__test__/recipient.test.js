import Recipient from "../recipient";

const testVaccine1 = {
  composition: ["Virus Proteins", "Sugar"],
};

const testVaccine2 = {
  composition: ["Sugar"],
};

// beforeEach(() => {
//   Recipient.mockClear();
//   mockAcceptInjection.mockClear();
//   mockHasAntibodies.mockClear();
// });

describe("acceptInjection", () => {
  test("should hasAntibodies be false if vaccine not contain Virus Proteins", () => {
    const recipient = new Recipient();
    recipient.acceptInjection(testVaccine1);

    expect(recipient.hasAntibodies).toBe(true);
    // TODO 17: add test here
  });

  test("should hasAntibodies be true if vaccine contain Virus Proteins", () => {
    // TODO 18: add test here
    const recipient = new Recipient();
    recipient.acceptInjection(testVaccine2);

    expect(recipient.hasAntibodies).toBe(false);
  });
});
