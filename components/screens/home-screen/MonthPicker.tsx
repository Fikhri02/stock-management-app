import { DarkColors } from "@/styles/main-theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  value?: Date; // currently selected date (any day); defaults to today
  onChange?: (date: Date) => void; // returns a Date set to the 1st of the new month
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(date: Date, delta: number) {
  const y = date.getFullYear();
  const m = date.getMonth();
  return new Date(y, m + delta, 1);
}

export default function MonthPicker({ value, onChange }: Props) {
  const [current, setCurrent] = useState<Date>(
    startOfMonth(value ?? new Date())
  );
  const [open, setOpen] = useState(false);
  const [pickerYear, setPickerYear] = useState<number>(current.getFullYear());

  const label = useMemo(() => {
    const m = monthNames[current.getMonth()];
    return `${m} ${current.getFullYear()}`;
  }, [current]);

  const go = (delta: number) => {
    const next = addMonths(current, delta);
    setCurrent(next);
    onChange?.(next);
  };

  const openPicker = () => {
    setPickerYear(current.getFullYear());
    setOpen(true);
  };

  const chooseMonth = (monthIndex: number) => {
    const next = new Date(pickerYear, monthIndex, 1);
    setCurrent(next);
    onChange?.(next);
    setOpen(false);
  };

  return (
    <>
      {/* Header:  < August 2025 >  */}
      <View style={styles.header}>
        <Pressable onPress={() => go(-1)} hitSlop={12}>
          {/* <Text style={styles.arrow}>&lt;</Text> */}
          <Ionicons
            name="caret-back"
            size={24}
            color={DarkColors.primary}
          ></Ionicons>
        </Pressable>

        <View style={styles.labelBox}>
          <Pressable onPress={openPicker} hitSlop={12}>
            <Text style={styles.label}>{label}</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => go(1)} hitSlop={12}>
          {/* <Text style={styles.arrow}>&gt;</Text> */}
          <Ionicons
            name="caret-forward"
            size={24}
            color={DarkColors.primary}
          ></Ionicons>
        </Pressable>
      </View>

      {/* Modal month “calendar” */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            {/* Year row */}
            <View style={styles.yearRow}>
              <Pressable
                onPress={() => setPickerYear((y) => y - 1)}
                hitSlop={12}
              >
                <Text style={styles.yearArrow}>&lt;</Text>
              </Pressable>
              <Text style={styles.yearText}>{pickerYear}</Text>
              <Pressable
                onPress={() => setPickerYear((y) => y + 1)}
                hitSlop={12}
              >
                <Text style={styles.yearArrow}>&gt;</Text>
              </Pressable>
            </View>

            {/* 12-month grid */}
            <View style={styles.grid}>
              {monthNames.map((name, idx) => {
                const isSelected =
                  pickerYear === current.getFullYear() &&
                  idx === current.getMonth();
                return (
                  <TouchableOpacity
                    key={name}
                    style={[styles.month, isSelected && styles.monthSelected]}
                    onPress={() => chooseMonth(idx)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.monthText,
                        isSelected && styles.monthTextSelected,
                      ]}
                    >
                      {name.slice(0, 3)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => setOpen(false)}
                style={styles.cancelBtn}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingVertical: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: DarkColors.primary,
    textAlign: "center",
  },
  labelBox: {
    width: "100%",
    color: DarkColors.secondary,
  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  sheet: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "white",
    padding: 16,
  },
  yearRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  yearArrow: { fontSize: 20, fontWeight: "700", padding: 8 },
  yearText: { fontSize: 18, fontWeight: "700" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  month: {
    width: "31%",
    aspectRatio: 3 / 1.6,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  monthSelected: {
    borderColor: "#4F46E5",
    backgroundColor: "#EEF2FF",
  },
  monthText: { fontSize: 16, fontWeight: "600" },
  monthTextSelected: { color: "#4338CA" },

  actions: {
    alignItems: "flex-end",
    marginTop: 6,
  },
  cancelBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  cancelText: { fontSize: 16, fontWeight: "600" },
});
