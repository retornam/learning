require "life"

describe World do
	let (:world) { World.new }

	describe "::new" do
		it "creates a new instance of a World" do
			expect(World.new).to be_a World
		end
	end

	describe "#cells" do
		it "creates an empty array that will someday become a world" do
			expect(World.new.cells).to eq []
		end
	end

	describe "#cell_at" do
		it "returns specific cell coordinate" do
			expect(World.new.cell_at(1, 1)).to eq true
		end
	end
end