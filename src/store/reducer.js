const initialState = {
	notes: [],
	currentNote: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_NOTE':
			let id = Date.now();
			console.log('create note');
			console.log({
				...state,
				notes: [...state.notes, { id: id, value: '', date: new Date() }],
				currentNote: id,
			});

			return {
				...state,
				notes: [...state.notes, { id: id, value: '' }],
				currentNote: id,
			};
		case 'CURRENT_NOTE':
			console.log(action.currentNoteId);
			return { ...state, currentNote: action.currentNoteId };
		case 'DELETE_NOTE':
			console.log('delete note');
			return {};
		default:
			return state;
	}
};

export default reducer;
