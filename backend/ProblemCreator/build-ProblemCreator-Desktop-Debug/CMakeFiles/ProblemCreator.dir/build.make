# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.22

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug

# Include any dependencies generated for this target.
include CMakeFiles/ProblemCreator.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/ProblemCreator.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/ProblemCreator.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/ProblemCreator.dir/flags.make

CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o: CMakeFiles/ProblemCreator.dir/flags.make
CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o: ProblemCreator_autogen/mocs_compilation.cpp
CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o: CMakeFiles/ProblemCreator.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o -MF CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o.d -o CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o -c /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/ProblemCreator_autogen/mocs_compilation.cpp

CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.i"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/ProblemCreator_autogen/mocs_compilation.cpp > CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.i

CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.s"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/ProblemCreator_autogen/mocs_compilation.cpp -o CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.s

CMakeFiles/ProblemCreator.dir/main.cpp.o: CMakeFiles/ProblemCreator.dir/flags.make
CMakeFiles/ProblemCreator.dir/main.cpp.o: /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/main.cpp
CMakeFiles/ProblemCreator.dir/main.cpp.o: CMakeFiles/ProblemCreator.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/ProblemCreator.dir/main.cpp.o"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/ProblemCreator.dir/main.cpp.o -MF CMakeFiles/ProblemCreator.dir/main.cpp.o.d -o CMakeFiles/ProblemCreator.dir/main.cpp.o -c /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/main.cpp

CMakeFiles/ProblemCreator.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/ProblemCreator.dir/main.cpp.i"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/main.cpp > CMakeFiles/ProblemCreator.dir/main.cpp.i

CMakeFiles/ProblemCreator.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/ProblemCreator.dir/main.cpp.s"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/main.cpp -o CMakeFiles/ProblemCreator.dir/main.cpp.s

CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o: CMakeFiles/ProblemCreator.dir/flags.make
CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o: /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/mainwindow.cpp
CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o: CMakeFiles/ProblemCreator.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o -MF CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o.d -o CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o -c /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/mainwindow.cpp

CMakeFiles/ProblemCreator.dir/mainwindow.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/ProblemCreator.dir/mainwindow.cpp.i"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/mainwindow.cpp > CMakeFiles/ProblemCreator.dir/mainwindow.cpp.i

CMakeFiles/ProblemCreator.dir/mainwindow.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/ProblemCreator.dir/mainwindow.cpp.s"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/mainwindow.cpp -o CMakeFiles/ProblemCreator.dir/mainwindow.cpp.s

CMakeFiles/ProblemCreator.dir/testdialog.cpp.o: CMakeFiles/ProblemCreator.dir/flags.make
CMakeFiles/ProblemCreator.dir/testdialog.cpp.o: /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/testdialog.cpp
CMakeFiles/ProblemCreator.dir/testdialog.cpp.o: CMakeFiles/ProblemCreator.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/ProblemCreator.dir/testdialog.cpp.o"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/ProblemCreator.dir/testdialog.cpp.o -MF CMakeFiles/ProblemCreator.dir/testdialog.cpp.o.d -o CMakeFiles/ProblemCreator.dir/testdialog.cpp.o -c /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/testdialog.cpp

CMakeFiles/ProblemCreator.dir/testdialog.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/ProblemCreator.dir/testdialog.cpp.i"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/testdialog.cpp > CMakeFiles/ProblemCreator.dir/testdialog.cpp.i

CMakeFiles/ProblemCreator.dir/testdialog.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/ProblemCreator.dir/testdialog.cpp.s"
	/usr/bin/g++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator/testdialog.cpp -o CMakeFiles/ProblemCreator.dir/testdialog.cpp.s

# Object files for target ProblemCreator
ProblemCreator_OBJECTS = \
"CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o" \
"CMakeFiles/ProblemCreator.dir/main.cpp.o" \
"CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o" \
"CMakeFiles/ProblemCreator.dir/testdialog.cpp.o"

# External object files for target ProblemCreator
ProblemCreator_EXTERNAL_OBJECTS =

ProblemCreator: CMakeFiles/ProblemCreator.dir/ProblemCreator_autogen/mocs_compilation.cpp.o
ProblemCreator: CMakeFiles/ProblemCreator.dir/main.cpp.o
ProblemCreator: CMakeFiles/ProblemCreator.dir/mainwindow.cpp.o
ProblemCreator: CMakeFiles/ProblemCreator.dir/testdialog.cpp.o
ProblemCreator: CMakeFiles/ProblemCreator.dir/build.make
ProblemCreator: /usr/lib/libQt5Widgets.so.5.15.3
ProblemCreator: /usr/lib/libQt5Gui.so.5.15.3
ProblemCreator: /usr/lib/libQt5Core.so.5.15.3
ProblemCreator: CMakeFiles/ProblemCreator.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Linking CXX executable ProblemCreator"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/ProblemCreator.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/ProblemCreator.dir/build: ProblemCreator
.PHONY : CMakeFiles/ProblemCreator.dir/build

CMakeFiles/ProblemCreator.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/ProblemCreator.dir/cmake_clean.cmake
.PHONY : CMakeFiles/ProblemCreator.dir/clean

CMakeFiles/ProblemCreator.dir/depend:
	cd /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/ProblemCreator /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug /home/intheloop/Desktop/pbinfo2.0/backend/ProblemCreator/build-ProblemCreator-Desktop-Debug/CMakeFiles/ProblemCreator.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/ProblemCreator.dir/depend
