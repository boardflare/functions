def run_tests(func, test_cases):
    """
    Function to run test cases
    """
    if not test_cases:
        raise ValueError("No test cases provided.")
    
    if not isinstance(test_cases, list):
        raise TypeError("Test cases should be provided as a list.")
    
    for i, test_case in enumerate(test_cases):
        if not isinstance(test_case, list):
            raise TypeError(f"Test case {i+1} is not a list.")
        
        # Handle both single arguments and lists of arguments
        if not test_case:
            raise ValueError(f"Test case {i+1} is empty.")
        
        # Special handling for 2D list inputs (like text_distance with nested needles)
        if isinstance(test_case[0], list) and len(test_case) == 3:  # 2D list case
            result = func(test_case[0], *test_case[1:])
        else:
            # Normal argument unpacking for functions like calculate_area
            result = func(*test_case)
        
        test_case_str = str(test_case)
        
        print(f"Case {i+1}: {test_case_str} -> {result}")
