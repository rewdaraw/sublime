import React from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export interface Item {
  label: string;
  value: string;
}
const countries = [
  { value: "nodejs", label: "Nodejs" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Nextjs" },
  { value: "graphql", label: "GraphQL" },
  { value: "express", label: "express" },
  { value: "prisma", label: "Prisma" },
  { value: "php", label: "PHP" },
];

export const ToolFilter = () => {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const customRender = (selected) => {
    return (
      <Flex flexDir="row" alignItems="center">
        <Avatar mr={2} size="sm" name={selected.label} />
        <Text>{selected.label}</Text>
      </Flex>
    );
  };

  const customCreateItemRender = (value) => {
    return (
      <Text>
        <Box as="span">Create</Box>{" "}
        <Box as="span" bg="red.300" fontWeight="bold">
          {value}
        </Box>
      </Text>
    );
  };

  return (
    <>
      <CUIAutoComplete
        tagStyleProps={{
          variant: "solid",
          bg: "linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)",
          mb: "8px !important",
        }}
        inputStyleProps={{
          bg: "transparent",
          rounded: "none",
          border: 0,
          borderBottom: "2px solid #ddd",
          _focus: { outline: "none" },
          paddingLeft: "0px",
        }}
        toggleButtonStyleProps={{
          borderRadius: "50%",
          bg: "white",
          color: "red",
          boxShadow: "lg",
        }}
        listStyleProps={{
          border: "0px",
          boxShadow: "0px",
        }}
        disableCreateItem
        label=""
        placeholder="React、Vue、PHP"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        itemRenderer={customRender}
        createItemRenderer={customCreateItemRender}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </>
  );
};
