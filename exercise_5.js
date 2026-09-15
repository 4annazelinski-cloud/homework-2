const age = 20;
const hasTicket = true;
const isStudent = false;

if (18 <= age && hasTicket) {
    console.log('Adult with ticket: true')
};

console.log(`Student or has ticket: ${isStudent || hasTicket}`);

console.log(`Not a student: ${isStudent !== true}`);

console.log(`Under 18 or student: ${isStudent || age <= 18}`);

console.log(`Adult and not a student: true ${18 <= age && !isStudent}`);
