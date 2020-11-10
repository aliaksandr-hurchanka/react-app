import { differenceBy, intersectionBy, forEach, find, sortBy, map } from 'lodash';

function composeJSON(curr, prev) {

    const newItems = map(differenceBy(curr, prev, 'question_id'), item => ({
        action: 'add_item',
        question: item.question_texts.EN,
        previous: '',
        current: Object.values(item.values_texts.EN).join(', '),
        order: item.order,
        section: item.section
    }));
    const removedItems = map(differenceBy(prev, curr, 'question_id'), item => ({
        action: 'remove_item',
        question: item.question_texts.EN,
        previous: Object.values(item.values_texts.EN).join(', '),
        current: '',
        order: item.order,
        section: item.section
    }));

    let addedValues = [];
    let removedValues = [];
    let addedQuestion = [];
    let removedQuestion = [];
    let updatedValues = [];

    // current items
    const filteredItems = intersectionBy(curr, prev, 'question_id');

    forEach(filteredItems, item => {
        const prevFoundedItem = find(prev, prevItem => prevItem.question_id === item.question_id);

        if (item.question_texts.EN === prevFoundedItem.question_texts.EN) {
            const prevValues = Object.values(prevFoundedItem.values_texts.EN).join(', ');
            const currValues = Object.values(item.values_texts.EN).join(', ');

            const prevValuesIds = Object.values(prevFoundedItem.values).join(', ');
            const currValuesIds = Object.values(item.values).join(', ');

            if (prevValues !== currValues || prevValuesIds !== currValuesIds) {
                updatedValues.push({
                    action: 'update_value',
                    question: item.question_texts.EN,
                    previous: prevValues,
                    current: currValues,
                    order: item.order,
                    section: item.section
                })
            }
        } else {
            addedQuestion.push({
                action: 'add_question',
                question: item.question_texts.EN,
                previous: '',
                current: map(item.values, val => item.values_texts.EN[val]).join(', '),
                order: item.order,
                section: item.section
            });
            removedQuestion.push({
                action: 'remove_question',
                question: prevFoundedItem.question_texts.EN,
                previous: map(prevFoundedItem.values, val => prevFoundedItem.values_texts.EN[val]).join(', '),
                current: '',
                order: prevFoundedItem.order,
                section: prevFoundedItem.section
            });
        }
    })

    return sortBy([
        ...newItems,
        ...removedItems,
        ...addedQuestion,
        ...removedQuestion,
        ...addedValues,
        ...removedValues,
        ...updatedValues
    ], ['section', 'order']);
}

export {
    composeJSON
};