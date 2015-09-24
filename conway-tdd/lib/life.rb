class World 
	def initialize
		@World
	end

	def cells
		return []
	end

	def cell_at(x, y)
		cell = []
		for j in 0..20
			for i in 0..20
				i = true
				cell << i
			end
		end
		return cell[1][1] 

	end
end