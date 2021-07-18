import React from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export interface Item {
  label: string;
  value: string;
}
const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" },
];

export const AutoCompleteInput = () => {
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
      <HStack spacing={2} align="center" h="40px">
        <Search2Icon color="gray.700" p="2px" h={6} w={6} />
        <Text fontWeight="bold">参加したいプロジェクトを探す</Text>
      </HStack>

      <CUIAutoComplete
        tagStyleProps={{
          rounded: "full",
          pt: 1,
          pb: 2,
          px: 2,
          mb: "8px !important",
          fontSize: "1rem",
        }}
        inputStyleProps={{
          bg: "transparent",
          rounded: "none",
          border: 0,
          borderBottom: "1px solid #ccc",
          _focus: { outline: "none" },
        }}
        listStyleProps={{
          border: "0px",
          boxShadow: "0px"
        }}
        hideToggleButton
        disableCreateItem
        label=""
        placeholder="(例) php, react"
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
