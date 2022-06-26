import {
  ADD_NEW_HABIT,
  CHANGE_STATUS,
  CHANGE_WEEK_STATUS,
  DELETE_HABIT,
  VIEW_CARD_DETAIL,
  VIEW_CARD_DETAIL_OFF,
} from "../actioin";

// habitList contain the list of all habit and its weekly data
// viewCard use to display Habit card
// viewCardIndex use to get the current index
const weaklyStore = {
  habitList: [],
  viewCard: true,
  viewCardIndex: "",
};

export default function albums(state = weaklyStore, action) {
  const singleHabit = {
    habit: "a",
    date: new Date().toLocaleDateString(),
    weeklyDate: [],
  };
  switch (action.type) {
    // use to add new habit when new habit send by user from the NewHabitFooter
    case ADD_NEW_HABIT:
      singleHabit.habit = action.habit;
      for (let i = 0; i < 7; i++) {
        var date = new Date();
        date.setDate(date.getDate() - i);

        singleHabit.weeklyDate = [
          {
            date: date.toLocaleDateString(),
            status: "notSet",
          },
          ...singleHabit.weeklyDate,
        ];
      }
      return {
        ...state,
        habitList: [singleHabit, ...state.habitList],
      };
    // use to display the card detail from HabitCard
    case VIEW_CARD_DETAIL:
      return {
        ...state,
        viewCard: false,
        viewCardIndex: action.habitIndex,
      };
    //use to go back from the detail of the card page from WeeklyHead
    case VIEW_CARD_DETAIL_OFF:
      return {
        ...state,
        viewCard: true,
        viewCardIndex: "",
      };
    // use to change the status of current date from the home page from HabitCard
    case CHANGE_STATUS:
      const newList = state.habitList;
      newList[action.status.index].weeklyDate[6].status = action.status.status;

      return {
        ...state,
        habitList: [...newList],
      };
    // use to change the status of each day from weekly detail
    case CHANGE_WEEK_STATUS:
      const newWeekList = state.habitList;
      newWeekList[action.status.cardIndex].weeklyDate[
        action.status.weekIndex
      ].status = action.status.status;

      return {
        ...state,
        habitList: [...newWeekList],
      };
    // use to delete the Habit card
    case DELETE_HABIT:
      let newTempHabit = state.habitList;
      newTempHabit.splice(action.index, 1);
      return {
        ...state,
        habitIndex: [...newTempHabit],
      };

    default:
      return { ...state };
  }
}
