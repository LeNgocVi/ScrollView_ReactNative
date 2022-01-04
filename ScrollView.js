import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function ScollViewExample() {
  const DATA = [
    {
      id: 1,
      isSelected: false,
      date: "Thu 05 Nov (Total: 1h 40m)",
      time: "02:15pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payrollNote: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      id: 2,
      isSelected: false,
      date: "Fri 06 Nov (Total: 2h 10m)",
      time: "02: 30pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale (11466) OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payrollNote: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      id: 3,
      isSelected: false,
      date: "Fri 06 Nov (Total: 2h 10m)",
      time: "02: 30pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale (11466) OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payrollNote: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
  ];

  const [data, setData] = useState(DATA);

  const onRowPress = (item) => {
    data[data.indexOf(item)] = { ...item, isSelected: !item.isSelected };
    setData([...data]);
  };

  const onEditPress = (id) => {
    Alert.alert("Edit!!", "Item id is " + id);
  };

  const onDeletePress = (id) => {
    Alert.alert("Delete!!", "Item id is " + id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameScreen}>FlatList And ScrollView</Text>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Ionicons style={styles.headerIcon} name="arrow-back-circle" />
          <View>
            <Text style={styles.headerDate}>Mon 02 Nov - Sun 08 Nov 2020</Text>
            <Text style={styles.headerTime}>(3h 20m)</Text>
          </View>
          <Ionicons style={styles.headerIcon} name="arrow-forward-circle" />
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              onPress={() => onRowPress(item)}
              style={[
                styles.itemRow,
                {
                  borderBottomColor: "#E8E8EB",
                  borderBottomWidth: 1,
                  paddingHorizontal: 16,
                },
              ]}
            >
              <View>
                <Text style={styles.itemDate}>{item.date}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
              </View>
              {item.isSelected ? (
                <AntDesign
                  name="caretup"
                  size={16}
                  color="#838393"
                  style={{ marginTop: 6 }}
                />
              ) : (
                <AntDesign
                  name="caretdown"
                  size={16}
                  color="#141434"
                  style={{ marginTop: 6 }}
                />
              )}
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={styles.itemTitle}>Job Name:</Text>
              <Text style={styles.itemContent}>{item.jobName}</Text>
              {item.isSelected ? (
                <View>
                  <View style={styles.itemRow}>
                    <View>
                      <Text style={styles.itemTitle}>Leave Type:</Text>
                      <Text style={styles.itemContent}>{item.leaveType}</Text>
                    </View>
                    <View>
                      <Text style={styles.itemTitle}>Time Allowance:</Text>
                      <Text style={styles.itemContent}>
                        {item.timeAllowance}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.itemTitle}>LAHA:</Text>
                      <Text style={styles.itemContent}>{item.laha}</Text>
                    </View>
                  </View>
                  <Text style={styles.itemTitle}>Description:</Text>
                  <Text style={styles.itemContent}>{item.description}</Text>
                  <Text style={styles.itemTitle}>Payroll Notes:</Text>
                  <Text style={styles.itemContent}>{item.payrollNote}</Text>
                  <View style={[styles.itemRow, { marginTop: 18 }]}>
                    <TouchableOpacity
                      onPress={() => onEditPress(item.id)}
                      style={[
                        styles.itemButton,
                        { backgroundColor: "#D00C04" },
                      ]}
                    >
                      <Text style={{ color: "#FFFFFF" }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => onDeletePress(item.id)}
                      style={[
                        styles.itemButton,
                        { borderWidth: 1, borderColor: "#838393" },
                      ]}
                    >
                      <Text style={{ color: "#838393" }}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  nameScreen: {
    width: "100%",
    height: 100,
    color: "#141434",
    paddingBottom: 24,

    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",

    textAlign: "center",
    textAlignVertical: "bottom",

    borderBottomWidth: 0.8,
    borderBottomColor: "#E8E8EB",
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 8,
  },
  headerIcon: {
    marginTop: 3,
    fontSize: 18,
    color: "#D00C04",
  },
  headerDate: {
    fontWeight: "600",
    color: "#141434",
  },
  headerTime: {
    color: "#838393",
    textAlign: "center",
  },
  item: {
    marginTop: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E8E8EB",
    paddingTop: 16,
    paddingBottom: 6,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDate: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: "#141434",
  },
  itemTime: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    color: "#414151",
    marginTop: 3,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    color: "#838393",
    marginTop: 12,
  },
  itemContent: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: "#141434",
    marginTop: 4,
  },
  itemButton: {
    width: 120,
    height: 40,
    borderRadius: 6,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
