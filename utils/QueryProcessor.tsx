export function getLargestOfThree(a: number, b: number, c: number): number {
    return Math.max(a, b, c);
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "gsha";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "gsha";
  }

  if (query.toLowerCase().includes("game id")) {
    return "5f34a61a";
  }

  if (query.toLowerCase().includes("class name")) {
    return "17-313";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 3) {
      const largest = getLargestOfThree(numbers[0], numbers[1], numbers[2]);
      return largest.toString();
    }
    return "Unable to determine the largest number.";
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      const sum = numbers[0] + numbers[1];
      return sum.toString();
    }
    return "Unable to calculate the sum.";
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("times")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      const product = numbers[0] * numbers[1];
      return product.toString();
    }
    return "Unable to calculate the product.";
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("divided by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      if (numbers[1] == 0) {
        return "Can't divide by 0"
      }
      const res = numbers[0] / numbers[1];
      return res.toString();
    }
    return "Unable to calculate the product.";
  }

  return "";
}
