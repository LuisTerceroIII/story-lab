import { View, Text, TextStyle } from "react-native";
import React from "react";
import { ViewStyle } from "react-native";
import { Button, Dropdown, TextInput } from "../../basics/index";
import { useGenAIStore } from "../../../store/screensStore/gen-ai";
import { shallow } from "zustand/shallow"

const MAIN_CONTAINER: ViewStyle = {
  marginTop: 19,
  paddingBottom: 200
};
export const NewStoryForm = () => {
    const { title, setTitle, selectedCategory, categoriesDropdownOptions, setSelectedCategory, isCategoryDropdownOpen, setIsCategoryDropdownOpen, plotIdea, setPlotIdea, generateStory } = 
    useGenAIStore( state => ({
            title: state.title,
            setTitle: state.setTitle,
            selectedCategory: state.selectedCategory,
            categoriesDropdownOptions: state.categoriesDropdownOptions,
            setSelectedCategory: state.setSelectedCategory,
            isCategoryDropdownOpen: state.isCategoryDropdownOpen,
            setIsCategoryDropdownOpen: state.setIsCategoryDropdownOpen,
            plotIdea: state.plotIdea,
            setPlotIdea: state.setPlotIdea,
            generateStory: state.generateStory
    }),shallow)

    return (
        <View style={MAIN_CONTAINER}>
            <TextInput label={"Title"} onChangeText={setTitle} value={title} />
            <Dropdown
                label={"Category"}
                isOpen={isCategoryDropdownOpen}
                setIsOpen={setIsCategoryDropdownOpen}
                options={categoriesDropdownOptions}
                selectedOption={selectedCategory}
                onSelect={setSelectedCategory}
                containerStyle={{ marginTop: 19, zIndex: 999999 }}
            />
            <TextInput label={"Idea"} onChangeText={setPlotIdea} value={plotIdea} multiline area containerStyle={{marginTop: 19, zIndex: 1}}/>
            <Button label={"Generate"} onPress={generateStory} containerStyle={{marginTop: 19, zIndex: 1, alignSelf: "center"}}/>
        </View>
    );
};
