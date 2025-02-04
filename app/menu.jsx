import {
  StyleSheet,
  ScrollView,
  Appearance,
  Platform,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";

import React from "react";

const MenuScreen = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const seperatorComp = <View style={styles.seperator} />;

  const headerComp = <Text style={styles.text}>Top of list</Text>;
  const footerComp = <Text style={styles.text}>Bottom of list</Text>;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text style={styles.text}>No items found</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.id}</Text>
            <View style={styles.menuTextRow}>
              <Text style={[styles.text, styles.menuItemTitle]}>
                {item.title}
              </Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          </View>
        )}></FlatList>
    </Container>
  );
};

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      padding: 20,
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
    },
    seperator: {
      height: 1,
      width: "100%",
      backgroundColor: theme.border,
    },
    footerComp: {
      marginHorizontal: "auto",
    },
    row: {
      flexDirection: "row",
      padding: 10,
    },
    menuTextRow: {
      flexDirection: "column",
      flex: 1,
    },
    menuItemTitle: {
      fontSize: 16,
      fontWeight: "bold",
      paddingLeft: 10,
    },
  });
}

export default MenuScreen;
