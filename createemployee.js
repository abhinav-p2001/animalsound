function createEmployee(name, role, salary) {
    return {
      name: name,
      role: role,
      salary: salary,
      introduce: function() {
        console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);
      }
    };
  }
  
  // Example usage:
  const employee1 = createEmployee("Alice", "Developer", 60000);
  employee1.introduce();
  // Output: Hello, I am Alice, working as a Developer.
  
  