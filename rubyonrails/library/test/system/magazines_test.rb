require "application_system_test_case"

class MagazinesTest < ApplicationSystemTestCase
  setup do
    @magazine = magazines(:one)
  end

  test "visiting the index" do
    visit magazines_url
    assert_selector "h1", text: "Magazines"
  end

  test "should create magazine" do
    visit magazines_url
    click_on "New magazine"

    fill_in "Author", with: @magazine.author
    fill_in "Title", with: @magazine.title
    click_on "Create Magazine"

    assert_text "Magazine was successfully created"
    click_on "Back"
  end

  test "should update Magazine" do
    visit magazine_url(@magazine)
    click_on "Edit this magazine", match: :first

    fill_in "Author", with: @magazine.author
    fill_in "Title", with: @magazine.title
    click_on "Update Magazine"

    assert_text "Magazine was successfully updated"
    click_on "Back"
  end

  test "should destroy Magazine" do
    visit magazine_url(@magazine)
    click_on "Destroy this magazine", match: :first

    assert_text "Magazine was successfully destroyed"
  end
end
