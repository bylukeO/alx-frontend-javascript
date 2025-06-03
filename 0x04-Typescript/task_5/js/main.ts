// Interface for MajorCredits with a unique brand
interface MajorCredits {
  credits: number;
  readonly brand: 'major';
}

// Interface for MinorCredits with a unique brand
interface MinorCredits {
  credits: number;
  readonly brand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}