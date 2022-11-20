require "test_helper"

class TshirtControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tshirt_create_url
    assert_response :success
  end

  test "should get store" do
    get tshirt_store_url
    assert_response :success
  end
end
