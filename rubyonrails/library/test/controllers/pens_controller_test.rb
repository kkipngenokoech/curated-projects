require "test_helper"

class PensControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pen = pens(:one)
  end

  test "should get index" do
    get pens_url
    assert_response :success
  end

  test "should get new" do
    get new_pen_url
    assert_response :success
  end

  test "should create pen" do
    assert_difference("Pen.count") do
      post pens_url, params: { pen: {  } }
    end

    assert_redirected_to pen_url(Pen.last)
  end

  test "should show pen" do
    get pen_url(@pen)
    assert_response :success
  end

  test "should get edit" do
    get edit_pen_url(@pen)
    assert_response :success
  end

  test "should update pen" do
    patch pen_url(@pen), params: { pen: {  } }
    assert_redirected_to pen_url(@pen)
  end

  test "should destroy pen" do
    assert_difference("Pen.count", -1) do
      delete pen_url(@pen)
    end

    assert_redirected_to pens_url
  end
end
