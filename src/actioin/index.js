// action
export const ADD_NEW_HABIT = "ADD_NEW_HABIT";
export const ADD_HABIT_TO_LIST = "ADD_HABIT_TO_LIST";
export const VIEW_CARD_DETAIL = "VIEW_CARD_DETAIL";
export const VIEW_CARD_DETAIL_OFF = "VIEW_CARD_DETAIL_OFF";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGE_WEEK_STATUS = "CHANGE_WEEK_STATUS";
export const DELETE_HABIT = "DELETE_HABIT";
// use to add new habit when new habit send by user from the NewHabitFooter
export function addNewHabitAction(habit) {
  return {
    type: ADD_NEW_HABIT,
    habit,
  };
}
// use to display the card detail from HabitCard
export function viewCardDetailOn(habitCard) {
  return {
    type: VIEW_CARD_DETAIL,
    habitIndex: habitCard,
  };
}
//use to go back from the detail of the card page from WeeklyHead
export function viewCardDetailOff() {
  return {
    type: VIEW_CARD_DETAIL_OFF,
  };
}
// use to change the status of current date from the home page from HabitCard
export function changeStatusAction(status) {
  return {
    type: CHANGE_STATUS,
    status,
  };
}
// use to change the status of each day from weekly detail
export function changeWeekStatusAction(status) {
  return {
    type: CHANGE_WEEK_STATUS,
    status,
  };
}
// use to delete the Habit card
export function deleteHabitAction(index) {
  return {
    type: DELETE_HABIT,
    index,
  };
}
