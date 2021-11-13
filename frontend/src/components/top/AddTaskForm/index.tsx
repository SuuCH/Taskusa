import { useState, VFC } from "react";
import { TextField } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns/";
import { BaseButton } from "../../utils/BaseButton";
import styles from "./index.module.css";

const AddTaskForm: VFC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const handleChangeDate = (newDate: Date | null) => {
    setDate(newDate);
  };
  const handleClickTaskAddButton = (): void => {
    console.log("押した");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <TextField
              className={styles.textField}
              required
              hiddenLabel
              placeholder="タスクを入力してください"
              variant="outlined"
            />
          </form>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              label="日付入力"
              variant="inline"
              format="yyyy/MM/dd"
              value={date}
              onChange={handleChangeDate}
            />
          </MuiPickersUtilsProvider>
          <BaseButton
            className={styles.button}
            color="#24C075"
            text="追加"
            onClick={handleClickTaskAddButton}
          />
        </div>
      </div>
    </>
  );
};

export { AddTaskForm };
