import {ADD_ARTICLE} from '../modules/index'

const forbiddenWords = ["idiot", "dumb", "spam", "illegal"]

export function censorMiddleWare() {
    return function(next) {
        return function(action) {
            switch(action.type) {
                case ADD_ARTICLE:
                    let tempText = action.payload.title.slice(0,action.payload.title.length)

                    forbiddenWords.forEach(x => {
                        let regex = new RegExp(x, 'gi');
                                                
                        tempText = tempText.replace(regex, "X".repeat(x.length))
                    })
                    action.payload = {
                        ...action.payload,
                        title: tempText
                    }
                    break;
                default:
                    break;
            }
            return next(action);
        }
    }
}