require "application_system_test_case"

class KittensTest < ApplicationSystemTestCase
  setup do
    @kitten = kittens(:one)
  end

  test "visiting the index" do
    visit kittens_url
    assert_selector "h1", text: "Kittens"
  end

  test "should create kitten" do
    visit kittens_url
    click_on "New kitten"

    fill_in "Age", with: @kitten.age
    fill_in "Cuteness", with: @kitten.cuteness
    fill_in "Name", with: @kitten.name
    fill_in "Softness", with: @kitten.softness
    click_on "Create Kitten"

    assert_text "Kitten was successfully created"
    click_on "Back"
  end

  test "should update Kitten" do
    visit kitten_url(@kitten)
    click_on "Edit this kitten", match: :first

    fill_in "Age", with: @kitten.age
    fill_in "Cuteness", with: @kitten.cuteness
    fill_in "Name", with: @kitten.name
    fill_in "Softness", with: @kitten.softness
    click_on "Update Kitten"

    assert_text "Kitten was successfully updated"
    click_on "Back"
  end

  test "should destroy Kitten" do
    visit kitten_url(@kitten)
    click_on "Destroy this kitten", match: :first

    assert_text "Kitten was successfully destroyed"
  end
end
