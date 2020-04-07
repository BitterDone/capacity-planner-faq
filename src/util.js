const loadFaqs = () => new Array(10).fill(0).map((und, index) => ({
    id: index,
    question: `What is FAQ #${index}?`,
    answer: `This is the FAQ #${index} and its answer`
}));

const loadDdOptions = () => [
    { value: 'chocolate test', label: 'Chocolate text' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

// const objectIsEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object

module.exports = {
    loadFaqs,
    loadDdOptions
}