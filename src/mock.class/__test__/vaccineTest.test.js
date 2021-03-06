import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockHasAntibodies = jest.fn(() => true);

jest.mock("../recipient", () => {
  return jest.fn(() => {
    return {
      acceptInjection: mockAcceptInjection,
      hasAntibodies: mockHasAntibodies,
    };
  });
});

beforeEach(() => {
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const vaccineTest = new VaccineTest();
    const result = vaccineTest.test();
    expect(mockHasAntibodies).toHaveBeenCalledWith();
    expect(result).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    mockHasAntibodies.mockReturnValue(false);
    const vaccineTest = new VaccineTest();
    const result = vaccineTest.test();
    expect(mockHasAntibodies).toHaveBeenCalledWith();
    expect(result).toBe("Vaccine Test Failed");
    // TODO 16: add test here
  });
});
