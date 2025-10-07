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

  if (query.toLowerCase().includes("professor name")) {
    return "michael hilton";
  }

  return "";
}
