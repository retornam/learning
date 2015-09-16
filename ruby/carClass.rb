class Car
	attr_accessor :color
	def initialize (color)
		@color = color
	end
	def color?(color)
		@color === color
	end
end
alpha = Car.new("orange")
puts alpha.color?("blue")
puts alpha.color?("orange")
