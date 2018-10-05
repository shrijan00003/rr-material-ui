day2:
______________________________________________________

what we have done here 
- we have again taken leftpane and rightpane together 
- deleted those files that are created before 

-modified style for making same height with static height 
-{exercises.map(({ title }, index) => (
                <ListItem key={index} button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}

    like this we can directly get title from exercises