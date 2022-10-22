require ('rspec')
require ('Album')

describe '#Album' do
    describe '.All' do
        it('returns an empty array when they are no albums') do
            expect(Album.All).to eq([])
        end
    end
    describe ('#save') do
        it('saves an album') do
            album = Album.new("Giant steps", nil)
            album.save()
            album2 =Album.new("Blue", nil)
            album.save()
            expect(Album.all).to(eq([album, album2]))
        end
    end
end
