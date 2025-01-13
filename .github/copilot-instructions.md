Each function you create should be self-contained with all required imports in a separate notebook cell, even if the previous cell has the same imports.  Do not put more than one function in a cell.  Each function should have a set of test_cases.  Here is an example:

```python
def add_two_days(date_input):
    """Add two days to the given date.
    Args:
        date_input (str or int): Date in 'YYYY-MM-DD' format or Excel serial date
    Returns:
        str: New date in 'YYYY-MM-DD' format
    """
    from datetime import datetime, timedelta
    
    if isinstance(date_input, int):
        # Excel serial date to datetime conversion
        date = datetime(1899, 12, 30) + timedelta(days=date_input)
    else:
        date = datetime.strptime(date_input, '%Y-%m-%d')
    
    new_date = date + timedelta(days=2)
    return new_date.strftime('%Y-%m-%d')

test_cases = [
    [43831],  # -> '2020-01-01'
    [44561],  # -> '2022-01-01'
    ['2024-06-15'],  # -> '2024-06-17'
    ['2025-01-01']  # -> '2025-01-03'
]

run_tests(add_two_days, test_cases)
```