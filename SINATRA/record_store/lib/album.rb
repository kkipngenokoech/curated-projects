class Album
    attr_reader :id, :name
    @@albums = {}
    @@total_rows = 0
    def initialize(name, id)
        @name = name
        @id = id || @@total_rows += 1
    end

    def self.All 
        @@albums.values()
    end
    def save
        @@albums[self.id] = Album.new(self.name, self.id)
    end
end