export const sortByID = (a, b) => {
    const lettersComparison = a.replace(/[0-9]/g, '').localeCompare(b.replace(/[0-9]/g, ''));
    if (lettersComparison !== 0) {
        return lettersComparison;
    }

    const numbersComparison = parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10);
    return numbersComparison;
};
