var tipuesearch = {"pages": [{'title': 'About', 'text': '41023255 徐佑寧 (組長) \n 41023207 楊舒涵 \n 41023208 廖子儀 \n 41023210 鄭翊均 \n 網站: https://mdecd2023.github.io/2b2-pj2bg13/ \n 倉儲: https://github.com/mdecd2023/2b2-pj2bg13 \n cdtemplate \n https://mde.tw/pjcopsim \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': '41023207', 'text': '跟組員一起利用 zmqRemoteAPI 通過 23000 port 控制 green and red BubbleRob robots 範例程式 研究出 後，再做四人連線時就比較清楚操作步驟。 \n', 'tags': '', 'url': '41023207.html'}, {'title': '41023208', 'text': 'bubbleRob_zmq_green_red.7z \n \n 心得:聽完老師的講解,自己再用看看,再經過跟同學的討論有用出來了。 \n', 'tags': '', 'url': '41023208.html'}, {'title': '41023210', 'text': '', 'tags': '', 'url': '41023210.html'}, {'title': '41023255', 'text': '', 'tags': '', 'url': '41023255.html'}, {'title': 'w10', 'text': '41023207 幫忙找相關資料，一起確認有無錯誤。 \n 41023210 尋第十週關於 CoppeliaSim zmpRemote API 的問題。 \n 41023255 尋第十週關於 CoppeliaSim zmpRemote API 的問題。 \n \n \n 有關 CoppeliaSim zmqRemoteAPI 問題 \n 1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n zmqRemoteAPI 是 CoppeliaSim 的遠程應用程序編程接口 (API)，CoppeliaSim 是一款功能強大的多平台仿真軟件，用於機器人、自動化和工程領域。zmqRemoteAPI 是一種輕量級高效的通信協議，允許從外部應用程序或編程語言遠程控制 CoppeliaSim。 \n 使用 zmqRemoteAPI，用戶可以與 CoppeliaSim 實時交互，並使用各種編程語言（如 Python、C++、Java、MATLAB 等）對他們的模擬進行編程。該 API 使用戶能夠遠程訪問 CoppeliaSim 的功能，包括創建和修改對象、控制機器人以及從模擬環境中收集傳感器數據。 \n \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n 1機器人仿真：CoppeliaSim 最常見的用例之一是機器人仿真。使用 zmqRemoteAPI，您可以編寫 Python 腳本來控制 CoppeliaSim 環境中的機器人。您可以向機器人發送命令以移動、拾取物體和執行其他任務。 \n 2自動化測試：您可以使用 zmqRemoteAPI 來自動化測試您的 VoppeliaSim 場景。 例如，您可以編寫 Python 腳本來測試場景中機械臂的功能。 您可以測試手臂移動、拾取物體並將它們放置在特定位置的能力。 \n 3數據記錄和分析：您可以使用 zmqRemoteAPI 從您的 VoppeliaSim 場景記錄數據並實時分析。 例如，您可以記錄機器人隨時間變化的位置並分析其運動模式以提高其性能。 \n 4機器學習：zmqRemoteAPI 也可用於機器學習應用程序。 您可以使用CoppeliaSim 訓練機器學習模型，然後使用zmqRemoteAPI 實時控制機器人來測試模型的性能。 \n 5增強現實和虛擬現實：您可以使用 zmqRemoteAPI 創建增強現實和虛擬現實應用程序。 例如，您可以使用 CoppeliaSim 模擬虛擬環境，然後使用 zmqRemoteAPI 從 AR 或 VR 耳機實時控制虛擬環境。 \n \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n zmqRemoteAPI 的優點： \n 1 實時交互：zmqRemoteAPI 允許 Python 和 CoppeliaSim 之間的實時交互，使其成為快速通信很重要的應用程序的理想選擇。 \n 2 易於使用：zmqRemoteAPI 易於使用，Python API 文檔齊全，易於上手。 \n 3 靈活：zmqRemoteAPI 提供了一種與 VoppeliaSim 交互的靈活方式，允許您發送和接收各種格式的數據。 \n 4 輕量級：zmqRemoteAPI 輕量級且延遲低，非常適合需要高性能的應用程序。 \n zmqRemoteAPI 的缺點： \n 1 附加設置：要使用 zmqRemoteAPI，您需要在 VoppeliaSim 場景中設置一個遠程 API 服務器對象，這可能是一個附加步驟。 \n 2 缺乏安全性：zmqRemoteAPI 不提供任何內置的安全機制，所以如果你想保護你的通信，你需要實施自己的安全措施。 \n 3 複雜性：雖然 zmqRemoteAPI 的 Python API 有詳細的文檔記錄，但對於初學者來說理解起來仍然很複雜。 \n 4 功能有限：與其他方法相比，zmqRemoteAPI 的功能有限，因此它可能不適合所有應用程序。 \n \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n 假設您想要構建一個可以自主走迷宮的機器人。您有一個迷宮的 CoppeliaSim 場景，您想要編寫一個 Python 腳本來控制機器人在迷宮中導航。 \n 使用 zmqRemoteAPI，您可以創建一個 Python 腳本，該腳本向 CoppeliaSim 環境中的機器人發送命令。 您可以使用機器人上的傳感器來檢測牆壁和障礙物，並使用 zmqRemoteAPI 向機器人發送命令以前進、左轉或右轉以及停止。 \n 要讓機器人自主穿過迷宮，您可以在 Python 腳本中使用尋路算法來計算穿過迷宮的最佳路徑。 然後，您可以使用 zmqRemoteAPI 向機器人發送命令以遵循計算出的路徑。 \n 當機器人在迷宮中穿行時，您可以使用機器人上的傳感器記錄其位置、速度和方向等數據。 然後，您可以使用 Python 腳本實時分析這些數據，以優化機器人的性能並改進尋路算法。 \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'hw', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n', 'tags': '', 'url': 'hw.html'}]};