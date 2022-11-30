json.extract! comment, :id, :author, :comment, :post_id, :parent_id, :created_at, :updated_at
json.url comment_url(comment, format: :json)
