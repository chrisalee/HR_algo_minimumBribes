/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

const minimumBribes = (q) => {
    let bribes = 0;
    
    for(let current_position = 0; current_position < q.length; current_position++) {
        // get original postion at 0 index
        const original_position = q[current_position] - 1;
        // find how far each moved
        const diff = original_position - current_position;
        // greater than two is impossible
        if(diff > 2) {
            console.log('Too chaotic');
            return 'Too chaotic';
        }
        if(diff <= 0) {
            // check each person starting from one person ahead of original position up until current position
            for(let i = Math.max(0, original_position - 1); i < current_position; i++) {
                const start_position_of_forward_person = q[i] - 1;
                // if a person in front of current person started BEHIND current person, then current person MUST have been bribed by them
                if(start_position_of_forward_person > original_position) {
                    bribes++
                }
            }
        }
    }
    console.log(bribes);
    return bribes;
}
