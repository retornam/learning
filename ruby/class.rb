class Car
	def initialize (color, price)
		@color = color
		@price = price
	end
	def getColor
		@color
	end
	def getPrice
		@price
	end
end

m3 = Car.new("red", "stacksOnStacksOnStacks")
puts m3.getColor, m3.getPrice

class NailPolish
	attr_accessor :color
	def initialize
	end
end

popsugar = NailPolish.new
popsugar.color = "pink"

puts popsugar.color
